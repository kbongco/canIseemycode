window.onload = () => {
  let iframe = document.querySelector('iframe');
  let textarea = document.querySelectorAll('textarea')

  for (let i = textarea.length - 1; i >= 0; i--){
    if (textarea[i].addEventListener) {
      textarea[i].addEventListener('input', function () {
        iframe.srcdoc = textarea[0].value + '<style>' + textarea[1].value + '</style>' + '<script>' + textarea[2].value + '<\/script>'
      }, false)
    } else if (textarea[i].attachEvent) {
      textarea[i].attachEvent('onpropertychange', function () {
        iframe.srcdoc = textarea[0].value + '<style>' + textarea[1].value + '</style>' + '<script>' + textarea[2].value + '<\/script>'
      })
    }
  }
}