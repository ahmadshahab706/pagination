
// import React, { useEffect, useState } from "react";
// import Loading from "./Loading";


// function Pagina() {

//     let [loading, setloading] = useState(false)
//     let [Post, setpost] = useState([])
//     let [currentPage, setCurrentPage] = useState(1)
//     let [postsPerPage, setpostsPerPage] = useState(10)


//     useEffect(() => {
//         setloading(true);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((data) => {
//                 setpost(data);
//                 let timer = setTimeout(() => {
//                     setloading(false)
//                 }, 2000)
//             });
//     }, []);


//     let lastindex = currentPage * postsPerPage
//     console.log(lastindex);
//     let firstindex = lastindex - postsPerPage
//     console.log(firstindex);
//     let currentposts = Post.slice(firstindex, lastindex)
//     console.log(Post);
//     console.log(currentposts);
//     let pagenumbers = []


   


//     for (let i = 1; i <= Math.ceil(Post.length / postsPerPage); i++) {
//         pagenumbers.push(i)
//         console.log(pagenumbers);
//     }


//     function pgi(item) {
//         console.log(item);
//         setCurrentPage(item)
//     }

//     function prev() {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1)
//         }
//         else {
//             setCurrentPage(Math.ceil(Post.length / postsPerPage))
//         }
//     }

//     function next() {
//         if (currentPage < Math.ceil(Post.length / postsPerPage)) {
//             setCurrentPage(currentPage + 1)
//         }
//         else {
//             setCurrentPage(1)
//         }
//     }


//     if (loading) {
//         return (
//             <main>
//                 <Loading />
//             </main>
//         )
//     }






//     return (
//         <>
//             <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: 'black' }} >
//                 <div style={{ backgroundColor: "#ffffff", width: '45%', border: '1px solid black', borderRadius: '10px', padding: '50px 0px' }}>
//                     <h1 style={{ textAlign: 'center', }}>PAGINATION</h1>
//                     <ul style={{ marginTop: '50px', marginLeft: "40px" }}>
//                         {currentposts.map((item) => {
//                             console.log(item);
//                             return (
//                                 <div>
//                                     <li style={{fontSize:"20px",}}>{item.id} {item.title}</li>
//                                 </div>
//                             )
//                         })}
//                     </ul>
//                     <div style={{ margin: 'auto', width: '350px', display: "flex", justifyContent: "space-between", marginTop: '50px' }}>
//                         {pagenumbers.map((item) => {
//                             console.log(pagenumbers);
//                             return (
//                                 <button onClick={() => pgi(item)} style={{ cursor: "pointer", width: "30px", height: '30px', borderRadius: "5px", border: 'none' }}>
//                                     {item}
//                                 </button>
//                             )
//                         })}
//                     </div>
//                     <div style={{ width: "150px", height: "50px", margin: "auto", marginTop: "30px", display: 'flex', justifyContent: "space-between" }} >
//                         <button style={{ width: "60px", height: "30px", border: "none", cursor: 'pointer' }} onClick={prev}>
//                             previous
//                         </button>

//                         <button style={{ width: "60px", height: "30px", border: "none", cursor: 'pointer' }} onClick={next}>
//                             Next
//                         </button>

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Pagina



import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Pagina() {
    let [loading, setloading] = useState(false);
    let [Post, setpost] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [postsPerPage, setpostsPerPage] = useState(10);

    useEffect(() => {
        setloading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setpost(data);
                let timer = setTimeout(() => {
                    setloading(false);
                }, 2000);
            });
    }, []);

    let lastindex = currentPage * postsPerPage;
    let firstindex = lastindex - postsPerPage;
    let currentposts = Post.slice(firstindex, lastindex);
    let pagenumbers = [];

    for (let i = 1; i <= Math.ceil(Post.length / postsPerPage); i++) {
        pagenumbers.push(i);
    }

    function pgi(item) {
        setCurrentPage(item);
    }

    function prev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            setCurrentPage(Math.ceil(Post.length / postsPerPage));
        }
    }

    function next() {
        if (currentPage < Math.ceil(Post.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(1);
        }
    }

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>PAGINATION</h1>
                    <ul className="post-list">
                        {currentposts.map((item) => {
                            return (
                                <div key={item.id}>
                                    <li className="post-item">{item.id} {item.title}</li>
                                </div>
                            );
                        })}
                    </ul>
                    <div className="pagination-buttons">
                        {pagenumbers.map((item) => {
                            return (
                                <button key={item} onClick={() => pgi(item)} className="page-button">
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={prev} className="nav-button">
                            Previous
                        </button>
                        <button onClick={next} className="nav-button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    height: max-content;
                    padding-bottom: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    padding: 20px;
                    box-sizing: border-box;
                }
                .content {
                    background-color: #ffffff;
                    width: 90%;
                    max-width: 600px;
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 50px 20px;
                    box-sizing: border-box;
                }
                h1 {
                    text-align: center;
                }
                .post-list {
                    margin-top: 50px;
                    margin-left: 20px;
                    list-style: none;
                    padding: 0;
                }
                .post-item {
                    font-size: 20px;
                }
                .pagination-buttons {
                    margin: auto;
                    width: 100%;
                    max-width: 350px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 50px;
                }
                .page-button {
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    border-radius: 5px;
                    border: none;
                }
                .navigation-buttons {
                    width: 100%;
                    max-width: 150px;
                    height: 50px;
                    margin: auto;
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                }
                .nav-button {
                    width: 60px;
                    height: 30px;
                    border: none;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .content {
                        width: 100%;
                        padding: 20px;
                    }
                    .post-list {
                        margin-left: 0;
                    }
                }
            `}</style>
        </>
    );
}

export default Pagina;
