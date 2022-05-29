// 请求下一页
let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET',`/page${n + 1}`)
  request.onreadystatechange = () =>{
    if(request.readyState === 4 && request.status === 200){
      const array = JSON.parse(request.response)
      array.forEach(item=>{
        const li = document.createElement("li")
        li.innerText  = item.id
        xxx.appendChild(li)
      })
      n += 1;
    }
  }
  request.send()
}
// 请求JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/5.json')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
      console.log(typeof request.response)
      console.log(request.response);
      const bool = JSON.parse(request.response)
      // myName.textContent = object.name
      console.log(typeof bool);
      console.log(bool);
    }
  }
  request.send()
}
// 请求XML
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/4.xml')
  request.onreadystatechange = () =>{
    if(request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.send()
}
// 请求HTML
getHTML.onclick =()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
      // 创建一个 div 标签
      const div = document.createElement('div')
      // 填写 div 内容
      div.innerHTML = request.response
      // 插入到身体里
      document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}

// 请求JS
getJS.onclick = ()=>{
    // 创建一个请求
    const request = new XMLHttpRequest()
    // 调用open
    request.open('GET','/2.js')
    // 监听onload
    request.onload = ()=>{
      // 创建 script 标签
      const script = document.createElement("script");
      // 填写 script 标签
      script.innerHTML = request.response
      // 插入身体
      document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}


// 请求CSS
getCSS.onclick = () => {
    const request  = new XMLHttpRequest();
    request.open("GET","/style.css") // readyState = 1
    request.onreadystatechange = () => {  
      // 下载完成 但是不知道是 成功 2xx 还是失败 4xx 5xx
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          // 创建 style 标签
          const style = document.createElement("style");
          // 填写 style 内容
          style.innerHTML = request.response;
          // 插到头里面
          document.head.appendChild(style);
        } else {
          alert('加载 CSS 失败')
        }
        
      }

    }

    request.send() // readyState = 2
}