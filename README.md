#网络协议分层

#经典五层模型
应用层-- 传输层 -- 网络层 -- 数据链接层 -- 物理层

#低三层
物理层主要作用是定义物理设备如何传输数据
数据链路层在通信的实体间建立数据链路链接
网络层为数据在节点之间传输创建逻辑链路

#传输层 tcp
向用户提供可靠的端到端（End-to-End）服务
传输层向高层屏蔽了下层数据通信的细节

#应用层
为应用软件提供了很多服务
构建于tcp协议之上
屏蔽网络传输相关细节

#HTTP发展历史
HTTP/0.9  只有一个命令get
			没有HEADER等描述数据的信息
			服务器发送完毕，就关闭tcp连接（1个tcp连接里可以有很多个http）
HTTP/1.0  增加了很多命令
			增加了status code 和header
			多字符集支持、多部分发送、权限、缓存等
HTTP/1.1  增加了持久连接（keep-alive）
			pipeline(同一个连接里可以发送多个请求)（并行）
			增加host和其他一些命令
HTTP/2    所有的数据以二进制传输
			同一个连接里面发送多个请求，不再需要按照顺序来
			头信息压缩以及推送（服务端可以主动推送内容）等，提高效率的功能（有效的减少带宽的使用）
			
#http的三次握手
client用户 -- http requrest -- TCP connection -- server服务器
第一次握手：client ------SYN=1,Seq=X-----> server
第二次握手：server ------SYN=1,ACK=X+1,Seq=Y -----> client
第三次握手：client ------ACK=Y+1,Seq=Z ------> server

#uri 包含了URL和urn
Uniform Resource Identifier / 统一资源标志符

#URL
Uniform Resource Locator / 统一资源定位器
http:/www.baidu.com:80/path?query=string#hash    此类的都叫URL，比如ftp协议
IP（互联网中物理服务器的地址）
端口（定位物理服务器中web服务器下面存放的内容）默认:80
路由(path)：定位
search：query
hash:锚点定位

#urn
Uniform Resource 
永久统一资源定位符
在资源移动之后还能被找到
目前还没有非常成熟的解决方案

#http报文
请求报文-相应报文
首行： GET/POST/DELETE/PUT  获取/创建/删除/更新  +  URL + HTTP/1.0 (协议版本，目前使用HTTP1.1)
首部(header)：Accept:  Accepte-Language
 
响应报文：
首行：HTTP/1.0（HTTP版本）  +  200 （状态码）  +  ok
首部：Content-type:text/plain
主体：hi，i am msg!

#http方法
用来定义对于资源的操作
get/post/delete/put

#http code
定义服务器对请求的处理结果
各个区间的code有各自的语义 100 200 300 400 500
好的HTTP服务可以通过code判断结果

#gitbash
curl -help
curl baidu.com
curl www.baidu.com
curl -v www.baidu.com

curl发请求，但是不会像浏览器一样显示html页面

#跨域问题 
解决：
	1、服务器设置Access-Control-Allow-Origin: '*'
	2、jsonp 浏览器允许<scrip> <img> <link>  src访问数据,服务器返回内容
	
浏览器跨域限制：后台不管有没有设置跨域请求，浏览器都会正常发送请求，得到返回值，
如果后台没有设置跨域请求，浏览器则报跨域请求的错误

#CORS 预请求
“预请求”概念：在浏览器发送请求之前，会先发出一个method为OPTION的请求，检测服务器是否能够正常响应
允许方法：GET  HEAD  POST
允许Content-Type: text-plain  multipart/form-data   application/x-www-form-urlencoded
其他限制：请求头限制  XMLHttpRequestUpload  ReadableStream对象
'Access-Control-Allow-Headers': 服务器设置允许的请求头
'Access-Control-Allow-Methods': 服务器设置允许的请求方法
'Accecc-Control-Allow-Max-Age': 服务器设置预请求多久后失效

#http协议中的 缓存cache-control
可缓存性： public(任何地方都可以缓存)  private(发起请求的地方[浏览器]可以缓存)  no-cache(不缓存)
缓存到期时间：
max-age=<seconds> (缓存多久后失效，缓存失效后，浏览器再次向服务器发起请求)  
s-maxage=<seconds> (代理服务器设置的)
max-stale=<seconds> (浏览器里用不到，失效后，还可以用缓存)
重新验证：
must-revalidate(设置max-age缓存失效后，必须重新从服务器，源服务器发送请求，重新获取数据，再次验证是否已经真的过期了，而不能直接使用本地的缓存)
proxy-revalidate(用于缓存服务器中，如果max-age到期后，必须从源服务器重新请求数据，重新验证)
其他：no-store   no-transform（不随便改内容）



