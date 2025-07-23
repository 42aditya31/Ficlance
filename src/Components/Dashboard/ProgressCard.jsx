// ProgressCard.jsx
import React from 'react';

const ProgressCard = ({
  title,
  value,
  icon,
  iconBg = 'bg-indigo-100',
  iconColor = 'text-primary',
  progress = null, // pass { value: 68, color: 'bg-primary' }
  changeText = '',
  statChangeIcon = null, // optional icon component for arrow
  statChangeColor = 'text-green-500',
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center text-lg`}>
          <span className={iconColor}>{icon}</span>
        </div>
      </div>

      {progress && (
        <>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`${progress.color} h-2 rounded-full`}
              style={{ width: `${progress.value}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-500 flex justify-between">
            {typeof progress.label !== 'undefined' ? (
              <span>{progress.label}</span>
            ) : (
              <span>{changeText}</span>
            )}
            {progress.showPercent && <span>{progress.value}%</span>}
          </div>
        </>
      )}

      {!progress && changeText && (
        <div className="flex items-center text-sm text-gray-500">
          {statChangeIcon && (
            <div className={`w-5 h-5 flex items-center justify-center ${statChangeColor} mr-1`}>
              {statChangeIcon}
            </div>
          )}
          <span>{changeText}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
