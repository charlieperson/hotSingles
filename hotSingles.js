function hotSingles(arr1, arr2) {
  var both = arr1.concat(arr2);
  var duplicates = [];

  for(i=0; i<arr1.length; i++) {
    for(x=0; x<arr2.length; x++){
      if(arr1[i] == arr2[x]) duplicates.push(arr2[x]);
    }
  }

  for(i=0; i<both.length; i++){
    for(x=0; x<duplicates.length; x++){
      var index = both.indexOf(duplicates[x]);
      if(index != -1) both.splice(index, 1);
    }
  }
  return both;
}
