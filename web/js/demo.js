function debounce(fn, wait) {

  var timer = null;
  return function () {
    console.log(3)
    var context = this
    var args = arguments
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, wait)
  }
}


setInterval(debounce(() => {
},500),1000)