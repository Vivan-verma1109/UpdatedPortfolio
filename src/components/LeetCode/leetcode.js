export async function fetchLeetCodeData() {
    try {
      const res = await fetch("https://leetcode-api-3wj7.onrender.com/api/leetcode/vivanVerma");
      if (!res.ok) throw new Error("Failed to fetch data");
      return await res.json();
    } catch (error) {
      console.error("Error fetching LeetCode data:", error);
      return null;
    }
  }
  