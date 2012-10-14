import js.Lib;

import pdiff.PerceptualDiff;
import pdiff.RGBAImage;

class CompareImages {
	static function main () untyped {
		var queryString = window.location.href.split("?").pop();
		var expectedQS = queryString.split("&").shift();
		var actualQS = queryString.split("&").pop();
		var expectedFileName = expectedQS.split("=").pop();
		var actualFileName = actualQS.split("=").pop();
		var expectedImg = __new__("Image");
		var actualImg = __new__("Image");
		expectedImg.addEventListener("load", onLoadExpected, false);
		expectedImg.src = expectedFileName;
		actualImg.addEventListener("load", onLoadActual, false);
		actualImg.src = actualFileName;
	}

	static var expectedCanvas : Dynamic;
	static var expectedDrawn = false;
	static function onLoadExpected(e) untyped {
		console.log("expected image arrived");
		expectedCanvas = document.createElement("canvas");
		var ctx = expectedCanvas.getContext("2d");
		ctx.drawImage(e.target, 0, 0);
		expectedDrawn = true;
		console.log("expected canvas created");
		if (actualDrawn) compareCanvases(expectedCanvas, actualCanvas);
	}

	static var actualCanvas : Dynamic;
	static var actualDrawn = false;
	static function onLoadActual(e) untyped {
		console.log("actual image arrived");
		actualCanvas = document.createElement("canvas");
		var ctx = actualCanvas.getContext("2d");
		ctx.drawImage(e.target, 0, 0);
		actualDrawn = true;
		console.log("actual canvas created");
		if (expectedDrawn) compareCanvases(expectedCanvas, actualCanvas);
	}

	static function toRGBAImg(inImg) untyped {
		var img = new RGBAImage(inImg.width, inImg.height);
		var i = 0;
		while (i < 4 * inImg.width * inImg.height) {
			img.set( Math.floor(i/4) % inImg.width, Math.floor((i/4) / inImg.width), 
				(inImg.data[i+3] << 24) | (inImg.data[i] << 16) | (inImg.data[i+1] << 8) | (inImg.data[i+2])
			);
			i += 4;
		}
		return img;
	}

	static function compareCanvases (expectedImg, actualImg) untyped {
		console.log("starting perceptualdiff");
		var pdiff = new PerceptualDiff({
			thresholdPixels : 20,
		});
		console.log("comparing images");
		var res = pdiff.compare(toRGBAImg(expectedImg.getContext("2d").getImageData(0, 0, expectedImg.width, expectedImg.height)), toRGBAImg(actualImg.getContext("2d").getImageData(0, 0, actualImg.width, actualImg.height)));
		console.log("compared images: " + res);
		var res = pdiff.compare(toRGBAImg(expectedImg.getContext("2d").getImageData(0, 0, expectedImg.width, expectedImg.height)), toRGBAImg(actualImg.getContext("2d").getImageData(0, 0, actualImg.width, actualImg.height)));
		if (!res)
			window.console.log("Pixels failed: " + (pdiff.pixelsFailed / (expectedImg.width * expectedImg.height) * 100) + "%");
		window.phantomTestResult = res;
	}
}
