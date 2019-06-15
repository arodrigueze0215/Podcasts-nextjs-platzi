import Link from 'next/link';
export default class Nav extends React.Component {
    render() {
        const { clip , closeModal } = this.props;
        return(
            <nav>

                { closeModal ? 
                    <a onClick = { closeModal } >Volver</a>
                    :
                    <Link href={`/channel?id=${clip.channel.id}`}>
                        <a className='close'>&lt; Volver</a>
                    </Link>
                }
                <style jsx>{`
                    nav {
                      background: none;
                    }
                    nav a {
                      display: inline-block;
                      padding: 15px;
                      color: white;
                      cursor: pointer;
                      text-decoration: none;
                    }
                `}
                </style>
            </nav>
        );
    }
}
