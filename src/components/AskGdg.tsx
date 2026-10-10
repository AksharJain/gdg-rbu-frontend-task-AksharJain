"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function AskGdg() {
  const [question, setQuestion] = useState("");
  const [lastQuestion, setLastQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError("");
    setAnswer("");
    setLastQuestion(question);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question.slice(0, 300) }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get answer.");
      }

      setAnswer(data.answer);
      setQuestion(""); // clear input on success
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask-gdg" className="w-full py-12 md:py-24">
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-8">
        <h2 className="font-pixel text-4xl md:text-5xl text-center text-[var(--fg)]">Ask GDG</h2>
        
        <div className="brutal p-6 md:p-8 flex flex-col gap-6 bg-[var(--card)]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <label htmlFor="ask-input" className="sr-only">Ask a question</label>
            <input
              id="ask-input"
              type="text"
              maxLength={300}
              placeholder="What do you want to know about GDG RBU?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 bg-transparent border-[3px] border-[var(--fg)] rounded-lg px-4 py-3 text-[var(--fg)] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gdg-blue font-body"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="brutal !bg-gdg-blue text-white font-bold py-3 px-6 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:!bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gdg-purple"
            >
              {loading ? "Asking..." : "Ask"}
              {!loading && <Send size={20} />}
            </button>
          </form>

          <div aria-live="polite" className="min-h-[20px] flex flex-col gap-4">
            {loading && (
              <div className="animate-pulse flex flex-col gap-2 mt-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            )}
            
            {error && !loading && (
              <div className="p-4 bg-gdg-red/10 border-[3px] border-gdg-red text-gdg-red font-bold rounded-lg font-body mt-4">
                Error: {error}
              </div>
            )}

            {answer && !loading && !error && (
              <div className="flex flex-col gap-2 mt-4">
                <p className="font-bold text-[var(--fg)] font-body">Q: {lastQuestion}</p>
                <div className="p-4 bg-[#F8F9FB] dark:bg-gray-800 border-[3px] border-[var(--fg)] rounded-xl font-body text-[var(--fg)] whitespace-pre-wrap shadow-[4px_4px_0_0_var(--fg)]">
                  {answer}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
