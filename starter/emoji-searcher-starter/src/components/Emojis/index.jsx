import PropTypes from "prop-types";
import styles from "./Emojis.module.css";
import EmojiBox from "../EmojiBox";
import Empty from "../Empty";
import { useState, useEffect } from "react";
import { filterEmojis } from "../../utils/filterEmojis";

const Emojis = ({ emojisData, searchText }) => {
  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);

  if (filteredEmojis.length > 0) {
    return (
      <div className={styles.emojisGrid}>
        {filteredEmojis.map((data, index) => (
          <div>
            <EmojiBox key={index} title={data.title} symbol={data.symbol} />
            {/* <p
            dangerouslySetInnerHTML={{
              __html: `&#${data.symbol.codePointAt(0)}`,
            }}
          /> */}
          </div>
        ))}
      </div>
    );
  } else {
    return <Empty text="No emoji Lol!!!" />;
  }
};
Emojis.propTypes = {
  emojisData: PropTypes.array,
  searchText: PropTypes.string,
};
export default Emojis;
