MUPDF_SRC := src
EMSDK_DIR := /usr/lib/emsdk

build := release
BUILD_DIR := $(MUPDF_SRC)/build/wasm/$(build)

MUPDF_JS := libmupdf.js
MUPDF_WASM := libmupdf.wasm
all: $(MUPDF_JS)

MUPDF_CORE := $(BUILD_DIR)/libmupdf.a $(BUILD_DIR)/libmupdf-third.a
$(MUPDF_CORE): #.FORCE
	$(MAKE) -j4 -C $(MUPDF_SRC) generate
	$(MAKE) -j4 -C $(MUPDF_SRC) \
		OS=wasm build=$(build) \
		XCFLAGS='-DTOFU -DTOFU_CJK -DFZ_ENABLE_SVG=0 -DFZ_ENABLE_HTML=0 -DFZ_ENABLE_EPUB=0 -DFZ_ENABLE_JS=0' \
		libs

wasm: $(MUPDF_JS) $(MUPDF_WASM)
$(MUPDF_JS) $(MUPDF_WASM): $(MUPDF_CORE) wrap.c wrap.js
	emcc  -o $@ \
        -g1 -Wall -Os \
        -s VERBOSE=0 \
        -s ABORTING_MALLOC=0 \
        -s TOTAL_MEMORY=512MB \
        -s ALLOW_MEMORY_GROWTH=1 \
        -s ASSERTIONS=1 \
        -s ENVIRONMENT=worker\
        -s EXPORT_ES6=1 \
        -s MODULARIZE=1 \
		-s WASM=1 \
		-s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' \
		-s EXPORTED_FUNCTIONS='["_malloc","_free"]' \
		-I $(MUPDF_SRC)/include \
		--pre-js wrap.js \
		wrap.c \
		$(BUILD_DIR)/libmupdf.a \
		$(BUILD_DIR)/libmupdf-third.a
    

clean:
	rm -f $(MUPDF_JS) $(MUPDF_WASM)
	$(MAKE) -C $(MUPDF_SRC)/ OS=wasm build=$(build) clean

.PHONY: .FORCE clean