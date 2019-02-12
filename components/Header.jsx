import Link from 'next/link';
export default class Header extends React.Component {
    render() {
        const { title } = this.props;
        return(
                <header>
                    <Link href="/"><a>{ title }</a></Link>
                    <style jsx>{`
                        header {
                            color: #fff;
                            background: #8756ca;
                            padding: 15px;
                            text-align: center;
                        }
                        header a {
                            color: #fff;
                            text-decoration: none;
                        }
                    `}
                    </style>
                </header>
        );
    }
}