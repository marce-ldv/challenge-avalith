const jsonjs = `
    {
        "cardId": 1,
        "cardTitle": "JavaScript",
        "cardDescription": "JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games.",
        "cardTechnology": ["Frontend", "Backend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [40, 10, 50]
        },
        "cardPost": {
            "postTitle": "JavaScript",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "JavaScript, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic manipulation of the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded. Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets. Although there are strong outward similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design; JavaScript was influenced by programming languages such as Self and Scheme."
        }
    },
    {
        "cardId": 2,
        "cardTitle": "CSS",
        "cardDescription": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.",
        "cardTechnology": ["Frontend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [20, 15, 65]
        },
        "cardPost": {
            "postTitle": "Cascading Style Sheets (CSS)",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications. CSS is designed primarily to enable the separation of presentation and content, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content."
        }
    },
    {
        "cardId": 3,
        "cardTitle": "HTML",
        "cardDescription": "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
        "cardTechnology": ["Frontend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [10, 10, 80]
        },
        "cardPost": {
            "postTitle": "Hypertext Markup Language (HTML)",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript it forms a triad of cornerstone technologies for the World Wide Web.[3] Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img /> and <input /> introduce content into the page directly. Others such as <p>...</p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page. HTML can embed programs written in a scripting language such as JavaScript which affect the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), maintainer of both the HTML and the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997."
        }
    },
    {
        "cardId": 4,
        "cardTitle": "Node.js",
        "cardDescription": "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser.",
        "cardTechnology": ["Backend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [60, 25, 15]
        },
        "cardPost": {
            "postTitle": "Node.js",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has become one of the foundational elements of the JavaScript everywhere paradigm, allowing web application development to unify around a single programming language, rather than rely on a different language for writing server side scripts. Though .js is the conventional filename extension for JavaScript code, the name Node.Js does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games)."
        }
    },
    {
        "cardId": 5,
        "cardTitle": "Python",
        "cardDescription": "Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991. An interpreted language, Python has a design philosophy that emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly brackets or keywords), and a syntax that allows programmers to express concepts in fewer lines of code than might be used in languages such as C++ or Java.",
        "cardTechnology": ["Backend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [60, 25, 15]
        },
        "cardPost": {
            "postTitle": "Python",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "Python is a widely used high-level programming language for general-purpose programming, created by Guido van Rossum and first released in 1991. An interpreted language, Python has a design philosophy that emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly brackets or keywords), and a syntax that allows programmers to express concepts in fewer lines of code than might be used in languages such as C++ or Java.[23][24] The language provides constructs intended to enable writing clear programs on both a small and large scale. Python features a dynamic type system and automatic memory management and supports multiple programming paradigms, including object-oriented, imperative, functional programming, and procedural styles. It has a large and comprehensive standard library. Python interpreters are available for many operating systems, allowing Python code to run on a wide variety of systems. CPython, the reference implementation of Python, is open source software and has a community-based development model, as do nearly all of its variant implementations. CPython is managed by the non-profit Python Software Foundation."
        }
    },
    {
        "cardId": 6,
        "cardTitle": "Angular",
        "cardDescription": "AngularJS (commonly referred to as Angular.js or AngularJS 1.X) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.",
        "cardTechnology": ["Frontend"],
        "cardImageUrl": "https://dummyimage.com/600x400/000/fff",
        "cardGraph": {
            "data": [60, 25, 15]
        },
        "cardPost": {
            "postTitle": "Angular",
            "postImageUrl": "https://dummyimage.com/1366x768/000/fff",
            "postDescription": "AngularJS (commonly referred to as Angular.js or AngularJS 1.X) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. In 2014, the original AngularJS team began working on Angular (Application Platform). The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources."
        }
    }
]`;

const jsonParsed = JSON.parse(jsonjs);
export default jsonParsed;