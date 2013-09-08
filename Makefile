MANIFESTS = app.js common icons manifest.json README.md
TARGET = commodityshare-chrome.zip 

$(TARGET): $(MANIFESTS)
	zip -r $(TARGET) $(MANIFESTS) -x *.git*

clean:
	rm -f $(TARGET)
.PHONE: clean
