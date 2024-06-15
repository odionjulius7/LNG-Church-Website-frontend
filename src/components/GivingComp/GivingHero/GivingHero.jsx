"use client";
import React, { useState } from "react";
import "./giving-hero.css";

const GivingHero = () => {
  const [localGivingType, setLocalGivingType] = useState("");
  const [internationalGivingType, setInternationalGivingType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [localPrayerRequest, setLocalPrayerRequest] = useState("");
  const [internationalPrayerRequest, setInternationalPrayerRequest] =
    useState("");
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  const localAccounts = {
    tithe: "1234567890",
    contribution: "2345678901",
    donation: "3456789012",
    partnership: "4567890123",
  };

  const internationalAccounts = {
    tithe: "INT-1234567890",
    contribution: "INT-2345678901",
    donation: "INT-3456789012",
    partnership: "INT-4567890123",
  };

  const handleSubmit = (e, accountType) => {
    e.preventDefault();
    const givingType =
      accountType === "local" ? localGivingType : internationalGivingType;
    const accounts =
      accountType === "local" ? localAccounts : internationalAccounts;
    setAccountNumber(accounts[givingType]);

    // Handle prayer request
    const prayerRequest =
      accountType === "local" ? localPrayerRequest : internationalPrayerRequest;
    if (prayerRequest) {
      console.log(`Prayer request submitted (${accountType}):`, prayerRequest);
      setPrayerSubmitted(true);
      setTimeout(() => setPrayerSubmitted(false), 3000);
      setLocalPrayerRequest("");
      setInternationalPrayerRequest("");
    }
  };

  return (
    <div className="giving-hero">
      <div className="container">
        <p className="subtitle">
          Giving; a joyful response to a life changed by the gospel.
        </p>
        <h1 className="title">Support The Ministry&apos;s Work</h1>
        <p>
          Choose your preferred method of giving and account type to receive the
          account number.
        </p>

        <div className="giving-boxes">
          <div className="giving-box">
            <h2>Local Giving</h2>
            <form onSubmit={(e) => handleSubmit(e, "local")}>
              <select
                value={localGivingType}
                onChange={(e) => setLocalGivingType(e.target.value)}
                required
              >
                <option value="">Select Giving Type</option>
                <option value="tithe">Tithe</option>
                <option value="contribution">Contribution</option>
                <option value="donation">Donation</option>
                <option value="partnership">Partnership</option>
              </select>
              <div className="prayer-request-section">
                <h3>Need Prayer?</h3>
                <textarea
                  value={localPrayerRequest}
                  onChange={(e) => setLocalPrayerRequest(e.target.value)}
                  placeholder="Enter your prayer request here (optional)..."
                ></textarea>
              </div>
              <button type="submit">Get Local Account</button>
            </form>
          </div>

          <div className="giving-box">
            <h2>International Giving</h2>
            <form onSubmit={(e) => handleSubmit(e, "international")}>
              <select
                value={internationalGivingType}
                onChange={(e) => setInternationalGivingType(e.target.value)}
                required
              >
                <option value="">Select Giving Type</option>
                <option value="tithe">Tithe</option>
                <option value="contribution">Contribution</option>
                <option value="donation">Donation</option>
                <option value="partnership">Partnership</option>
              </select>

              <div className="prayer-request-section">
                <h3>Need Prayer?</h3>
                <textarea
                  value={internationalPrayerRequest}
                  onChange={(e) =>
                    setInternationalPrayerRequest(e.target.value)
                  }
                  placeholder="Enter your prayer request here (optional)..."
                ></textarea>
              </div>

              <button type="submit">Get International Account</button>
            </form>
          </div>
        </div>

        {accountNumber && (
          <div className="account-display">
            <h3>Account Number:</h3>
            <p>{accountNumber}</p>
          </div>
        )}

        {prayerSubmitted && (
          <p className="success-message">
            Your prayer request has been submitted. We&apos;ll be praying for
            you!
          </p>
        )}
      </div>
    </div>
  );
};

export default GivingHero;
