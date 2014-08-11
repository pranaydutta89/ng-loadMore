

var dictionary = function (key, value) {
    this.url = key;
    this.pageLength = value;
};

var dicArr = new Array();
var notPresent = true;

     angular.module('loadMoreMod', [])

    .factory("queryData", function ($http) {

        return {
            q:function(options)
            {

                //check whether in dic if not then add
                if (!options.jsonData)
                    options.jsonData = new Object();


                if (dicArr.length === 0) {
                    options.jsonData.pageLength = 0;
                    dicArr.push(new dictionary(options.url, 0));
                }
                else {
                    $.each(dicArr, function (idx, elem) {
                        if (elem.url === options.url) {

                            options.jsonData.pageLength = elem.pageLength++;
                            notPresent = false;
                        }

                    });


                    if (notPresent) {
                        options.jsonData.pageLength = 0;
                        dicArr.push(new dictionary(options.url, 0));
                    }

                }
       
                return $http({
                    url: options.url,
                    method: options.method || 'POST',
                    data: options.jsonData===undefined? {} : JSON.stringify(options.jsonData),
                    headers:options.headers || { 'Content-Type': 'application/json; charset=utf-8' }
                }).then(function (dataRet) {
                    
                    if (dataRet !== undefined) {
                        return dataRet.data.d;
                    }
                    else
                        return null;

                }, function () {

                    return null;

                });

            }


        }


    });
