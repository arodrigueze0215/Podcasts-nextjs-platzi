import Channel from './Channel.jsx';
export default class ChannelGrid extends React.Component {
    render() {
        const { channels } = this.props;
         return(
            <div className="channels">
                { channels.map((channel) => (
                    <Channel channel={ channel } key={ channel.id }/>
                )) }

                <style jsx>{`
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                `}
                </style>
            </div>
        );
    }
}