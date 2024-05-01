<div className="prog act"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='proggrams'
            > 
                <div className="text-center">
                  <h2>Proggrams Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
                <br />
                <div className='elementCenter'>
                  <div className="wrapper">
                  {
                    ([...Array(6)].map(() => (
                      <Cards content={{
                      id: 'programs',
                      img : "https://placeholder.co/500x300",
                      imgSize: '100%',
                      title : "Proggrams",
                      date: '12/01/24',
                      leads : "John Doe",
                      parafMini : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!",
                      urlBtn : "#button",
                      paraf : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet tempore asperiores deserunt distinctio obcaecati sequi mollitia aperiam veritatis, odit, enim similique in provident consequuntur iusto, est a quam. Doloremque dolores nobis qui cupiditate corporis laborum quod modi sint, similique aut."
                    }} key={keys()} />
                    )))
                  }
                </div>
                </div>
                <div className="center">
                  <a href="/proggrams" className="more">See More About Proggrams..</a>
                </div>
            </div>
            <div className="event"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='event'
            >
              <div className="text-center">
                  <h2>Events Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
              </div>
              
              <div className="elementCenter">
                <div className="wrapper">
                {
                ([...Array(6)].map(() => (
                  <CardsEvents content = {{
                    id: 'events',
                    title: 'Event',
                    date: '12/01/24',
                    imgUrl: 'https://placeholder.co/500x300',
                    location: 'Jl. Jatihandap No 1',
                    presentedBy: 'Bamboo Fest',
                    descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                  }} key={keys()}/>
                )))
              }
              </div>
              </div>
              <div className="center">
                  <a href="/events" className="more">See More About Events..</a>
                </div>
            </div>
            <div className="gallery"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='gallery'
            >
            <div className="text-center">
                  <h2>Gallery Us</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
                <div className="elementCenter">
                  <div className="wrapper">
              
                {([...Array(6)].map(() => (
                  <CardsGallery 
                    content = {
                      {
                        id: 'gallery',
                        imgUrl: 'https://placeholder.co/500x300',
                        title: "Gallery",
                        miniDesc: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        date: '12/02/24'
                      }
                    } key={keys()}
                  />
                )))}
              </div>
                </div>
              
              <div className="center">
                  <a href="/gallery" className="more">See More About Gallery..</a>
                </div>
            </div>
            <div className="news"
              style={
                {
                  width: '100%',
                  height: 'auto'
                }
              } id='news'
            >
            <div className="text-center">
                  <h2>News</h2>
                  <p className="thin-200">
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                  </p>
                </div>
                
              <div className="elementCenter">
                <div className="wrapper">
                {
                  ([...Array(6)].map(() => (
                    <CardsNews context={{
                      id: 'news',
                      imgUrl: "https://placeholder.co/500x300",
                      title: 'News',
                      date: '12/01/24',
                      writter: 'John Doe',
                      description: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore!'
                    }} key={keys()} />  
                  )))
                }
              </div>
              </div>
              
              <div className="center">
                  <a href="/news" className="more">See More About News..</a>
                </div>
            </div>