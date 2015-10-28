import urllib
import urllib2
import re
 
page = 1
for page in range(1,200):
    url = 'http://www.jy135.com/jiaoyu/%d.html' % page
    user_agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
    headers = { 'User-Agent' : user_agent }
    try:
        request = urllib2.Request(url,headers = headers)
        response = urllib2.urlopen(request)
        content = response.read()
        with open ('lio.txt','ab') as f: 
            f.write(content) 
        print content
    except urllib2.URLError, e:
        if hasattr(e,"code"):
            print e.code
        if hasattr(e,"reason"):
            print e.reason
