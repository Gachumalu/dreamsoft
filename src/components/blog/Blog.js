import React from 'react'
import '../blog/Blog.css'
const Blog = () => {
    return (
        <>
            <section>
                <div className="container-fluid mt-4 mb-5">
                    <h1 className="blog-title text-center">Latest Blog Posts</h1>
                    <div className="blog">
                        <div className="blog-card mt-5">
                       
                            <div className="blogab">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/post-10-370x307.jpg" className='img-fluid  blog-img' alt="blogImage" />
                            <h3 className="numbers">07/<span className='num-span'>04</span></h3>
                            </div>
                            <h4 className="blog-card-title">Benefits Of Async/Await</h4>
                            <p className="blog-text">Asynchronous functions are a good and bad thing in JavaScript. The good side is that asynchronous functions are non-blocking and…</p>
                        </div>

                        <div className="blog-card mt-5">
                            <div className="blogab">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/post-11-370x307.jpg" className='img-fluid blog-img' alt="blogImage" />
                            <h3 className="numbers">07/<span className='num-span'>17</span></h3>
                            </div>
                            <h4 className="blog-card-title">Key Considerations Of IPaaS</h4>
                            <p className="blog-text">Digital transformation requires cloud appropriate adoption, legacy IT systems modernization, and Agile-based methodologies for faster…</p>
                        </div>

                        <div className="blog-card mt-5">
                            <div className="blogab">
                            <img src="https://ld-wt73.template-help.com/wt_prod-18959/images/post-12-370x307.jpg" className='img-fluid blog-img' alt="blogImage" />
                            <h3 className="numbers">07/<span className='num-span'>22</span></h3>
                            </div>
                            <h4 className="blog-card-title">Hibernate Query Language</h4>
                            <p className="blog-text">In this tutorial, we will discuss the Hibernate Query Language. HQL is an object-oriented query language. Hibernate Query...</p>
                        </div>
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog