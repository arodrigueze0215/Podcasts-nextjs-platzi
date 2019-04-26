import 'isomorphic-fetch';
import Series from '../components/Series.jsx';
import PodcastList from '../components/PodcastList.jsx';
import Layout from '../components/Layout.jsx';
import Banner from '../components/Banner.jsx';
import Error from 'next/error';
export default class Channel extends React.Component {

    static async getInitialProps({ res, query }) {

        try {
            let [reqChannel, reqAudios, reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${query.id}`),
                fetch(`https://api.audioboom.com/channels/${query.id}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${query.id}/child_channels`)
            ])

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status;
                return {reqChannel: null, reqAudios: null, reqSeries: null, statusCode: res.statusCode}
            } 
            
            let dataChannel = await reqChannel.json();
            let { channel } = dataChannel.body;
            
            let dataAudio = await reqAudios.json();
            let { audio_clips } = dataAudio.body;
            
            let dataSerie = await reqSeries.json();
            let series = dataSerie.body.channels;
            
            return { channel, audio_clips, series, statusCode:reqChannel.status }            
        } catch (error) {
            res.statusCode = 503;
            return { reqChannel: null, reqAudios: null, reqSeries: null, statusCode: 503 }
        }
    } 
    render() {
        const { channel, audio_clips, series, statusCode } = this.props;
        if (statusCode !== 200) {
            return(<Error statusCode={ statusCode }/>)
        }
        return(
            <Layout title="Podcasts">
                <Banner channel={ channel }/>

                { series.length > 0 &&
                   <Series series={ series }/>
                }
                <PodcastList audio_clips={audio_clips} title="Ultimos podcasts"/>
            </Layout>
        )
    }
}