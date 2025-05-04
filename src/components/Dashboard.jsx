import { useContext, useState, useRef } from "react";
import { TranslationContext } from "../context/TranslationContext";

const Dashboard = () => {
  const { data, setData } = useContext(TranslationContext);
  const [newKeyword, setNewKeyword] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const dragItem = useRef();

  // Add a new keyword and its translation
  const handleAdd = () => {
    if (!newKeyword.trim()) return;

    const newItem = {
      key: newKeyword.trim(),
      translations: {
        [data.selectedLanguage]: newTranslation.trim(),
      },
    };

    const updatedKeywords = [...data.keywords, newItem];
    setData({ ...data, keywords: updatedKeywords });
    setNewKeyword("");
    setNewTranslation("");
  };

  // Edit translation
  const handleEdit = (index, lang, value) => {
    const updated = [...data.keywords];
    if (!updated[index].translations) {
      updated[index].translations = {};
    }
    updated[index].translations[lang] = value;
    setData({ ...data, keywords: updated });
  };

  // Delete a keyword
  const handleDelete = (index) => {
    const updated = [...data.keywords];
    updated.splice(index, 1);
    setData({ ...data, keywords: updated });
  };

  // Drag & Drop
  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDrop = (index) => {
    const draggedIndex = dragItem.current;
    if (draggedIndex === undefined || draggedIndex === index) return;

    const updated = [...data.keywords];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, movedItem);

    setData({ ...data, keywords: updated });
    dragItem.current = null;
  };

  return (
    <div className="bg-white shadow p-4 rounded max-w-xl">
      <h1 className="mb-4 font-bold text-2xl text-center">
        Management Dashboard
      </h1>

      {/* Add New Keyword */}
      <div className="mb-6">
        <h2 className="mb-2 font-semibold text-lg">Add New Keyword</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Keyword"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <input
            type="text"
            placeholder={`Translation (${data.selectedLanguage})`}
            value={newTranslation}
            onChange={(e) => setNewTranslation(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* List of Keywords */}
      <div className="space-y-3">
        {data.keywords.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-3 border rounded cursor-move"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{item.key}</span>
            </div>
            <input
              type="text"
              className="p-2 border rounded w-full"
              placeholder={`Translation (${data.selectedLanguage})`}
              value={item.translations?.[data.selectedLanguage] || ""}
              onChange={(e) =>
                handleEdit(index, data.selectedLanguage, e.target.value)
              }
            />
            <button
              onClick={handleDelete.bind(null, index)}
              className="flex bg-red-600 hover:bg-red-700 mt-2 p-2 rounded text-white transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
