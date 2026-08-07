"use client";

import { useEffect, useState } from "react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CcgTGbR00YY9EBM/review";
const LABELS = ["Meget utilfreds", "Utilfreds", "Okay", "Tilfreds", "Meget tilfreds"];

function Star({ filled }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={filled ? "filled" : ""}>
      <path d="M12 2.6l2.9 6.2 6.7.7-5 4.6 1.4 6.7-6-3.5-6 3.5 1.4-6.7-5-4.6 6.7-.7Z" />
    </svg>
  );
}

export default function ReviewWidget() {
  const [step, setStep] = useState("closed");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    if (step === "closed") return;
    function onKeyDown(event) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [step]);

  function close() {
    setStep("closed");
    setRating(0);
    setHovered(0);
  }

  function choose(value) {
    setRating(value);
    if (value >= 4) {
      window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer");
      close();
    } else {
      setStep("feedback");
    }
  }

  function submitFeedback(event) {
    event.preventDefault();
    setStep("thanks");
  }

  return (
    <>
      <button type="button" className="review-trigger" onClick={() => setStep("rate")}>
        Giv en anmeldelse
      </button>

      {step !== "closed" && (
        <div className="review-overlay" onClick={close}>
          <div className="review-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="review-close" aria-label="Luk" onClick={close}>×</button>

            {step === "rate" && (
              <>
                <span className="review-kicker">Din mening</span>
                <h3>Hvor tilfreds var du?</h3>
                <div className="review-stars" onMouseLeave={() => setHovered(0)}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-label={`${value} stjerner`}
                      onMouseEnter={() => setHovered(value)}
                      onClick={() => choose(value)}
                    >
                      <Star filled={value <= (hovered || rating)} />
                    </button>
                  ))}
                </div>
                {hovered > 0 && <p className="review-hint">{LABELS[hovered - 1]}</p>}
              </>
            )}

            {step === "feedback" && (
              <>
                <span className="review-kicker">Din mening</span>
                <h3>Hvad kan vi gøre bedre?</h3>
                <p className="review-hint">Fortæl os kort, hvad der gik galt, så vi kan blive bedre.</p>
                <form className="review-feedback-form" onSubmit={submitFeedback}>
                  <textarea name="feedback" rows="4" placeholder="Skriv din feedback her..." required autoFocus />
                  <button type="submit" className="button primary">Send feedback</button>
                </form>
              </>
            )}

            {step === "thanks" && (
              <>
                <span className="review-kicker">Tak</span>
                <h3>Tak for din feedback</h3>
                <p className="review-hint">Vi har noteret din tilbagemelding og kigger på det.</p>
                <button type="button" className="button primary" onClick={close}>Luk</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
