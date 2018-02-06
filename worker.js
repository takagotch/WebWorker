var worker = new Worker('worker.js');

var fileData = [];

self.onmessage = function(event){
  var file = event.data,
      reader = new FileReaderSync();

  for(var i = 0; i < file.length; i++){
    fileData.push(reader.readAsText(files[i]));
  }
  self.postMessage('SUCCESS');
};

