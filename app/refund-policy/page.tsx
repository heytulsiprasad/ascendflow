"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-400">
              Last updated:{" "}
              <span className="text-white">February 06, 2025</span>
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeIn}
            className="prose prose-invert max-w-none prose-lg prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300"
          >
            <div className="space-y-8 [&>h3]:pt-8 [&>h2]:pt-12 [&>p]:leading-relaxed">
              <div>
                <p>
                  Thank you for shopping at <strong>Ascend Flow</strong>.
                </p>

                <p>
                  The following terms are applicable for any products that you
                  have purchased from us.
                </p>

                <h2>
                  <strong>Eligibility for Refunds</strong>
                </h2>

                <p>We offer refunds under the following circumstances:</p>

                <ul>
                  <li>
                    If the service is not delivered as promised due to an error
                    on our end.
                  </li>
                  <li>
                    If a technical issue caused by our platform prevents you
                    from accessing the features you paid for, and the issue
                    cannot be resolved within a reasonable timeframe.
                  </li>
                  <li>
                    If you cancel your subscription within the refund period
                    outlined below.
                  </li>
                </ul>

                <h2>
                  <strong>Refund Period</strong>
                </h2>

                <p>
                  Refund requests must be made within <strong>15</strong> days
                  of the payment date. Requests made after this period will not
                  be eligible for a refund.
                </p>

                <h2>
                  <strong>Non-Refundable Cases</strong>
                </h2>

                <p>
                  Refunds will not be granted under the following conditions:
                </p>

                <ul>
                  <li>
                    If you change your mind after purchasing a subscription or
                    service.
                  </li>
                  <li>
                    If you fail to use the service during the subscription
                    period.
                  </li>
                  <li>
                    If the issue is caused by third-party software or tools not
                    affiliated with our platform.
                  </li>
                </ul>

                <h2>
                  <strong>Refund Process</strong>
                </h2>

                <p>To request a refund, please follow these steps:</p>

                <ol>
                  <li>
                    Contact our support team at{" "}
                    <a href="mailto:heytulsiprasad@ascendflowhq.com">
                      heytulsiprasad@ascendflowhq.com
                    </a>
                    .
                  </li>
                  <li>
                    Provide your payment receipt, order ID, and a detailed
                    explanation of the issue.
                  </li>
                  <li>
                    Our team will review your request and respond within 3-5
                    business days.
                  </li>
                  <li>
                    If your request is approved, the refund will be processed to
                    your original payment method within 7-10 business days.
                  </li>
                  <li>
                    This has been generated by{" "}
                    <a href="https://dodopayments.com">dodopayments.com</a>
                  </li>
                </ol>

                <h2>
                  <strong>Contact Us</strong>
                </h2>

                <p>
                  If you have any questions about this Refund Policy or require
                  assistance, please reach out to us:
                </p>

                <p>
                  Email:{" "}
                  <a href="mailto:heytulsiprasad@ascendflowhq.com">
                    heytulsiprasad@ascendflowhq.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
