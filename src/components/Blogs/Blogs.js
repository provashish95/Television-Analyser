import React from 'react';
import './Blogs.css';
import '../Home/Home.css';

const Blogs = () => {
    const header = "<header>content</header>";
    const nav = "<nav>content</nav>";
    const section = "<section>content</section>";
    const article = "<article>content</article>";
    const footer = "<footer>content</footer>";
    const aside = "<aside>content</aside>";
    return (
        <div className="container">
            <div className="row mt-5 border border-4 p-4">
                <div className="col-12">
                    <h4 className='text-style fw-bold'>What is context API ?</h4>
                    <p>Context API হচ্ছে এমন একটা জিনিস যা আমাদের যেকোনো চাইল্ড কম্পোনেন্ট থেকে ডাটা এক্সেস করার সুযোগ দিয়ে থাকে props using ছাড়াই সো আমরা বলতে পারি React Context is a way to manage state globally.আমাদের রিএক্ট প্রজেক্টে শুধু মাত্র props use করে parent component থেকে ডাটা nested component গুলোতে পাঠানোর জন্য প্রতিটা রেফারেন্স component গুলায় props use করতে হয় যা অনেক জটিল কিন্তু আমি যদি context API সবার উপরে বা parent  component এ declare করি তাহলে এই parent component এর under এ সব child or nested child components সরাসরি ডাটা access করতে পারবে , আমাদের প্রতিটা step to step (top-down) props use করা লাগবে না so we can say Context provides a way to pass data through the component tree without having to pass props down manually at every level. </p>
                </div>
                <div className="col-12">
                    <h4 className='text-style fw-bold'>What is Semantic tag and given some example?</h4>
                    <p>Semantic tag হচ্ছে যার নিজেস্ব মিনিং ফুল নাম থাকবে যা দ্বারা বুঝা যাবে কি ধরনের content এর জন্য tag টি use করা হচ্ছে। যেমন header tag use করলে আমারা বুঝতে পারি এখনে হেডিং জাতীয় content আছে। মোট কথা semantic tag এইচটিএমএল এ ব্যবহার করলে developer যেমন tag দেখেই content এর idea নিতে পারবে আবার browser থেকে semantic tag দ্বারা contain কোনো Content কে দেখতেও better লাগে। আমরা কিছু semantic tag  এর উদাহরন দেখি যেমন:  <b>{header}</b> it defines a header for a web page<br /> <b>{nav}</b>: defines a container for navigation links <br /> <b>{section}</b>: defines a section in a web page<br /> <b>{article}</b>: This element contains the main part, containing information about the web page <br /> <b> {aside}</b>:  The aside content is often placed as a sidebar in a document.<br />
                        <b>{footer}</b>: defines a footer for a document or a section.<br />
                        semantic tag use করার বেশ কিছু সুবিধা আছে যেমন SEO এর জন্য , easier to read, It has greater accessibility, Overall, semantic elements also lead to more consistent code.

                    </p>
                </div>
                <div className="col-12">
                    <h4 className='text-style fw-bold'>What is Inline , block and inline-block elements ?</h4>
                    <p><b>Block-level elements: </b> Block level elements সবসময় শুরু হয় একটি নতুন লাইন নিয়ে এবং by default কিছু জায়গা / margin নিয়ে থাকে অথবা বলতে পারি সবসময় available full width জায়গা দখল করে থাকে। যেমন : P tag and div tag is most important block level elements example.<br /> <b>Inline elements: </b> Inline elements কোনো নতুন লাইন দিয়ে শুরু হয় না এবং এটার content আনুযায়ী জায়গা /width and height নিয়ে থাকে । Inline elements এর ভেতরে কখনই Block level elements রাখা যায় না কিন্তু Block level elements এর ভেতরে Inline elements রাখা যায়। A (hyper link ),SPAN , BUTTON, LABEL, SMALL, MAP, STRONG, SUB, SUP, INPUT tags are example of Inline elements.<br /> <b>Inline-block elements: </b> Inline block elements প্রায় inline elements এর মতই কিন্তু এটার চারদিকে margin padding add করা যায় যা নাকি Inline elements এর ক্ষেত্রে শুধু মাত্র left and right side এ margin padding দেওয়া যায় কিন্তু height দেওয়া যায় না আর inline block elements এ width height set করা যায়। </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;