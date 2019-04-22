import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="container blog">
      <h1>What is Server-Side Rendering?</h1>
      <small>April 21, 2019</small>
      <p>
      Server-Side Rendering refers to the way a server sends the HTML to the client so 
      that the content loads quicky. Since the adoption of javascript frameworks like
      Angular, React or Vue, the term has become a buzzword. The problem with these
      frameworks is that the browser has to load the page and make a second request to
      fetch the javascript code that is going to build the DOM. This delay might affect
      the SEO of Web sites with rich content because Web crawlers cannot index the page
       immediately.
      </p>
      <h2>Critical Rendering Path</h2>
      <p>
      The work the browser does as soon as it receives the HTML, CSS and JavaScript of a
      requested page is called <strong>critical rendering path</strong>. Before rendering
      the page, the browser processes the HTML to obtain the DOM (Document Object Model),
      then the same work is done on the CSS to obtain the CSSOM (CSS Object Model). Both
      the DOM and the CSSOM have a tree-like structure, which means there is a parent
      object from which several children emerge. For instance, the html tag is the 
      parent element of the body and head tags in the DOM. As for the CSS, the name 
      cascading style sheets already imply this hierarchical structure.
      </p>
      <p>
      The next step the browser executes is combining the DOM and CSSOM into a render 
      tree. The  render tree is created as the browser traverses the DOM and apllies CSS
      style to each node encountered. As soon as this step is completed, the elements are
      positioned in the viewport and represented as pixels on the screen.
      </p>
      <h2>What can slow down the rendering of a page?</h2>
      <p>
      The first factor affecting the speed of a page load is the CSS. The browser cannot
      render any content until the CSSOM is complete. The next factor is javascript. If
      the browser encounters a script tag, it stops the DOM building until the javascript
      is requested and executed. And javascript execution can cause the modification of
      the DOM or CSSOM which further delays the rendering of the page.
      </p>
      <h2>How does SSR work?</h2>
      <p>
      Instead of executing javascript code on the client side to render a page, a 
      server-side application generates the complete HTML on the server and sends it to 
      the client where it is rendered and is immediately viewable, thus avoiding the
      processing of javascript on the client's device. Unlike single-page applications
      that can be static, SSR requires node.js running on the server consuming CPU power.
      </p>
      <h2>Pros and Cons</h2>
      <p>
      SSR allows for SEO indexing because the content is easily rendered. Pocessing the
      javascript code is computationally expensive for a Web crawler. Googlebot, the 
      Google Web crawler, does this and then has to run a second round of indexing
      after the JS code is executed.
      </p>
      <p>
      SSR provides a good user experience when the content is the main element in a page.
      This is especially relevant when the Internet connection or the clients's device
      are slow. 
      </p>
      <p>
      One disadvantage apart from the need of running node.js on the server, is that the 
      interactivity provided by JavaScript is not immediately available. Here is where 
      the term called "hydration" pops up. A Web page is hydrated when the markup already
      received is populated by the data coming from the server and by the event handlers
      that make it interactive.
      </p>
      <h2>What's next, AMP?</h2>
      <p>
      Most popular JavaScript frameworks allow the creation server-side rendering pages.
      Next.js, Angular Universal and Vue SSR are implementations of the SSR technology.
      An alternative to SSR for SEO is dynamic rendering where there is content aimed to
      users and content aime to user agents or Web crawlers. For dynamic content
      implementation there are tools like <a href="https://pptr.dev">Puppeteer </a>
       or <a href="https://render-tron.appspot.com/">Rendertron</a>.
      </p>
      <p>
      And finally AMP, which stands for <a href="https://amp.dev/">Accelerated Mobile 
      Pages</a>, claims to solve the problem of content blocking by processing JavaScript
      in parallel, optimizing or minimizing CSS, Web fonts, and layout and using GPU 
      for animations and taking advantage of  optimized downloads.
      </p>
      <p>This is how the AMP project starts describing their JS approach:</p>
      <blockquote>
      JavaScript is powerful, it can modify just about every aspect of the page, but it 
      can also block DOM construction and delay page rendering. To keep JavaScript 
      from delaying page rendering, AMP allows only asynchronous JavaScript.
      </blockquote>
      <p>
      To wrap up, for content rich pages SSR is a great option, whereas sigle-page
      applications are well suited for functionality and interactivity. 
      AMP could be an optimal option for mobile devices specifically where memory and
      CPU power are constrained.      
      </p>
    </div>
  )
}

export default Blog;
