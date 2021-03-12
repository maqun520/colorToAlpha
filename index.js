function rgbaNum (rgba) {
    let val = rgba.match(/(\d(\.\d+)?)+/g);
    if(val.length > 3) {
        val.pop()
    }
    return val;
};
// sHex色值 alpha透明度
function colorRgba (sHex, alpha = 1) {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  let sColor = sHex.toLowerCase()
  if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
          var sColorNew = '#'
          for (let i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
          }
          sColor = sColorNew
      }
      var sColorChange = []
      for (let i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
      }
      return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
  } else {
      return 'rgba(' + rgbaNum(sHex).join(',') + ',' + alpha + ')'
  }
}
colorRgba('rgba(0,0,0,0.6)')
colorRgba('#FFFFFF')
