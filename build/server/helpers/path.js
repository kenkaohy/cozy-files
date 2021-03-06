// Generated by CoffeeScript 1.9.1
module.exports.checkIfPathAvailable = function(fileInfo, files, exceptionId) {
  var fileDoc, fileFullPath, fullPath, i, len;
  fullPath = fileInfo.path + "/" + fileInfo.name;
  for (i = 0, len = files.length; i < len; i++) {
    fileDoc = files[i];
    fileFullPath = fileDoc.path + "/" + fileDoc.name;
    if ((fullPath === fileFullPath) && (fileDoc.id !== exceptionId)) {
      return false;
    }
  }
  return true;
};
