<input type="file" onchange="fileSelect(this)" meultiple>
<script>
var worker = new Worker('worker.js');

function fileSelect(target){
  worker.postMessage(target.files);
}

worker.onmessage = function(event){
  if(event.data = 'SUCCESS'){
    //...
  }
};

</script>

