import 'isomorphic-fetch'
import Layout from '../components/Layout';
import Nav from '../components/Podcast/Nav.jsx';
import Picture from '../components/Podcast/Picture.jsx';
import Player from '../components/Podcast/Player.jsx';

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    let id = query.id
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    let clip = (await fetchClip.json()).body.audio_clip
    return { clip }
  }

  render() {
    const { clip } = this.props;

    return <Layout title={clip.title}>

        <div className='modal'>
            <div className='clip'>
              <Nav clip={ clip }/>
              <Picture clip={ clip }/>
              <Player clip={ clip }/>
            </div>
        </div>

      <style jsx>{`
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
    </Layout>
  }
}
