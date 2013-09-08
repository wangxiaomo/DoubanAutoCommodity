MANIFESTS = app.js common icons libs manifest.json README.md run.js
TARGET = commodityshare-chrome.zip 

$(TARGET): $(MANIFESTS)
	zip -r $(TARGET) $(MANIFESTS) -x *.git*

clean:
	rm -f $(TARGET)
.PHONE: clean
