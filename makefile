JS := $(patsubst %.hx,%.js,$(wildcard *.hx))

default: $(JS) misc/main.js display

%.js: %.hx
	haxe -js $*.js -cp ../jeash/ --remap flash:jeash -main $* 

misc/main.js: Main.hx
	haxe -js misc/main.js -cp ../jeash/ --remap flash:jeash -main Main.hx

text/main.js: Main.hx
	haxe -js text/main.js -cp ../jeash/ --remap flash:jeash -main Main.hx

all:
	make clean all -C display
	make clean all -C events
	make clean all -C net
	make -C utils
	make -C zjnue/jeash-rotate-scroll
