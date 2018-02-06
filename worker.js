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

//worker_client.js
self.addEventListener('message', function(e){
  var count = 0;

  for(var i = 1, len = e.data.target; i < len; i++){
    if(i % e.data.x === 0){ count++; }
  }
  postmessage(count);
});


