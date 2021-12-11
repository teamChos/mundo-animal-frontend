import React from 'react'
import { Link } from 'react-router-dom'

import './home.scss'

export const Home = () => {
    return (
        <main>
            <div className="p-4 p-md-5 my-4 text-white rounded bg-primary">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Adopta, salva una vida, gana un amigo</h1>
                    <p className="lead my-3">Somos una plataforma web que busca devolver a las mascotas perdidas a sus dueños y proporcionar un lugar donde ofrecer a nuestros animalitos en adopción.</p>
                    <p className="lead mb-0"><Link to="/adopciones" className="text-white fw-bold">Ver a las mascotas en adopción...</Link></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="/#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="/#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-3">


                <div className="col-md-8">
                    <div className="position-sticky" style={{ top: 32 }}>
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>



                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4">
                        <h4 className="fst-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li><a href="/#">GitHub</a></li>
                            <li><a href="/#">Twitter</a></li>
                            <li><a href="/#">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>

        </main>
    )
}
