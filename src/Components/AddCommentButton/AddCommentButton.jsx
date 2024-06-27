import React, { useState } from 'react';

const AddCommentButton = () => {
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleButtonClick = () => {
    if (showInput && comment) {
      alert(`Comment submitted: ${comment}`);
      setComment('');
    } else {
      setShowInput(!showInput);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center space-x-2 z-50">
      {showInput && (
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="Enter your comment"
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      )}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        style={{ minWidth: '100px' }} // Adjust width as needed
      >
        {showInput ? 'Submit' : 'Add Comment'}
      </button>
    </div>
  );
};

export default AddCommentButton;
