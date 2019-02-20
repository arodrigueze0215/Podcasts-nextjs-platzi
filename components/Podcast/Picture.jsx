export default class Picture extends React.Component {
    render() {
        const { clip } = this.props;
        return(
            <picture>
                <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
                <style jsx>{`
                    picture {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex: 1 1;
                        flex-direction: column;
                        width: auto;
                        padding: 10%;
                    }
                    picture div {
                        width: 100%;
                        height: 100%;
                        background-position: 50% 50%;
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                `}</style>
            </picture>
        );
    }
}
