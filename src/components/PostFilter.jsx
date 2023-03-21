import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        placeholder="Пошук..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
        defaultValue="Сортування по..."
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  );
}

export default PostFilter;
