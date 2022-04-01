import Layout from '../components/Global/Layout'
import styles from '../styles/Home.module.css'
function Home() {
  return (
    <Layout pageTitle="Demo Home">
      <section>
        <div className="content_wrap_outside">
          <div className="content_wrap_inside_pad">
            <h1>Demo Project</h1>
            <a className="button button_space" href="/examples/counter">
              <i className="button_icon fa-solid fa-arrow-up-9-1"></i>
              <span className="button_label">Counter</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Home
