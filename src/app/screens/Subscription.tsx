import { useNavigate } from 'react-router';
import { Check, Crown, Smartphone } from 'lucide-react';
import Button from '../components/Button';

export default function Subscription() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Free',
      price: 'UGX 0',
      period: '/month',
      features: [
        'Limited music streaming',
        'Ads included',
        'Standard quality audio',
        'Community access',
      ],
      current: true,
    },
    {
      name: 'Premium',
      price: 'UGX 15,000',
      period: '/month',
      features: [
        'Unlimited music streaming',
        'Ad-free listening',
        'High quality audio',
        'Offline downloads',
        'Exclusive content access',
        'Community access',
      ],
      popular: true,
    },
    {
      name: 'VIP',
      price: 'UGX 30,000',
      period: '/month',
      features: [
        'Everything in Premium',
        'Behind-the-scenes content',
        'Live session priority access',
        'Direct messages with Joshua',
        'Early ticket access',
        'Exclusive merch discounts',
      ],
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-[#0B0B0B] px-6 py-6">
      <button onClick={() => navigate(-1)} className="text-[#C22026] mb-6">
        ← Back
      </button>

      <div className="text-center mb-8">
        <Crown size={48} className="text-[#C22026] mx-auto mb-4" />
        <h1 className="text-3xl text-[#F5F5DC] mb-2">Choose Your Plan</h1>
        <p className="text-gray-400">
          Unlock the full Baraka+ experience
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 ${
              plan.premium
                ? 'bg-gradient-to-br from-[#C22026]/20 to-[#F9E84E]/20 border-2 border-[#C22026]'
                : plan.popular
                ? 'bg-gradient-to-br from-[#C22026]/10 to-[#F9E84E]/10 border-2 border-[#F9E84E]'
                : 'bg-gray-900/50 border border-gray-800'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F9E84E] px-4 py-1 rounded-full text-xs text-[#0B0B0B]">
                MOST POPULAR
              </div>
            )}

            {plan.premium && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C22026] px-4 py-1 rounded-full text-xs text-white">
                BEST VALUE
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl text-[#F5F5DC] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl text-[#C22026]">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check size={20} className="text-[#C22026] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.current ? (
              <Button variant="disabled" fullWidth>
                Current Plan
              </Button>
            ) : (
              <Button variant="primary" fullWidth>
                Subscribe Now
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-900/50 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone size={24} className="text-[#C22026]" />
          <h3 className="text-lg text-[#F5F5DC]">Payment Options</h3>
        </div>
        <p className="text-gray-400 mb-4">
          Pay securely with Mobile Money (MTN, Airtel) or Card
        </p>
        <div className="flex gap-2 flex-wrap">
          <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
            MTN Mobile Money
          </div>
          <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
            Airtel Money
          </div>
          <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-300">
            Visa/Mastercard
          </div>
        </div>
      </div>
    </div>
  );
}
