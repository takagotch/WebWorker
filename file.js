//var worker = new Worker('worker.js');
//
<input type="file" onchange="fileSelect(this)" multiple>
<script>
var fileData = [];

function fileSelect(target){
  fileData = [];
  for(var i = 0; i < target.files.length; i++){
   fileReader(target.files[i]);
  }
}

function fileReader(file){
  var reader = new FileReader();
  
  reader.readAsText(file);

  reader.onload = function(){
    fileData.push(reader.result);
  };
}

</script>


