import web
from time import strftime

urls = ('/(.*)', 'Index')

app = web.application(urls, globals())

web.config.debug = True

class Index:
    def __init__(self):
        self.render = web.template.render('templates/')

    def GET(self, name=None):
        now = strftime("%Y-%m-%d %H:%M:%S")
        return self.render.index(now)
    
    def POST(self, name):
        return "post"
    
if __name__ == '__main__':
    app.run()
