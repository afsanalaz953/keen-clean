import React, { useEffect, useState } from "react";

const Freindcards = () => {
useEffect(() => {
  fetch('/friends.json')   
    .then(res => res.json())
    .then(data => {
      setFriends(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to load friends:', err);
      setLoading(false);
    }, 1500);
}, []);



    return { freinds, loading };
};

export default Freindcards;