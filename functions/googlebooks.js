// https://www.googleapis.com/books/v1/volumes?q=isbn:9784798047409
     const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
          // Source: https://developers.google.com/web/fundamentals/getting-started/primers/promises#promisifying_xmlhttprequest
          function get(querystring){
               console.log('getting url: ' + url + querystring);
               return new Promise(function(resolve, reject) {
                    var req = new XMLHttpRequest();
                    //this.searching = req;
                    req.open('GET', url + querystring);
                    req.onload = function(){
                         if(req.status == 200){
                              var parsed = JSON.parse(req.response);
                              resolve(parsed);
                         }
                         else{
                              reject(Error(req.statusText));
                         }
                    };
                    req.onerror = function(){
                         reject(Error('Network Error'));
                    };
                    req.send();
               });
          }
          function set(res){
               for (var i=0, n=res.items.length; i<n; i++) {
                    var item = res.items[i];
                    var a = document.createElement('a');
                    a.href = item.volumeInfo.previewLink;
          
                    var img = document.createElement('img');
                    img.src = item.volumeInfo.imageLinks.thumbnail;
          
                    a.appendChild(img);
                    document.body.appendChild(a);
               }
          }
