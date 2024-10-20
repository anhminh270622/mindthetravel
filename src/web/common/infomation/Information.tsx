import { Flex } from "antd";
import styles from "./Information.module.scss";
interface InformationProps {
    tile?: string;
    description: string;
}
const Information = ({ tile, description }: InformationProps) => {
    return (
        <div className={styles.root}>
            <Flex className={styles.arrowBox} align="center">
                <h3>{tile}</h3>
                <p>{`MindTheTravel / ${description}`}</p>
            </Flex>
        </div>

    );
}

export default Information;