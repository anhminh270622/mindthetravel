import { Flex } from "antd";
import styles from "./Information.module.scss";
interface InformationProps {
    tile?: string;
    description: string;
    image?: string;
}
const Information = ({ tile, description, image }: InformationProps) => {
    return (
        <div className={styles.root} style={{ backgroundImage: `url(${image})` }}>
            <Flex
                className={styles.arrowBox}
                align={tile ? "center" : "start"}
                justify="center"
                vertical>
                <h3>{tile}</h3>
                <p>{`MindTheTravel / ${description}`}</p>
            </Flex>
        </div>

    );
}

export default Information;