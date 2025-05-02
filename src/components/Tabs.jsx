"use client"

import React, { useState } from "react"

const Tabs = ({ children, defaultValue, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const handleTabChange = (value) => {
    setActiveTab(value)
    if (onChange) onChange(value)
  }

  // Filter and clone children to pass active state
  const tabs = React.Children.map(children, (child) => {
    if (child.type.displayName === "TabsList") {
      return React.cloneElement(child, {
        activeTab,
        onTabChange: handleTabChange,
      })
    }

    if (child.type.displayName === "TabsContent") {
      return React.cloneElement(child, {
        activeTab,
        value: child.props.value,
      })
    }

    return child
  })

  return <div className="w-full">{tabs}</div>
}

const TabsList = ({ children, activeTab, onTabChange, className = "" }) => {
  // Clone tab triggers to pass active state
  const triggers = React.Children.map(children, (child) => {
    if (child.type.displayName === "TabsTrigger") {
      return React.cloneElement(child, {
        isActive: activeTab === child.props.value,
        onSelect: () => onTabChange(child.props.value),
      })
    }
    return child
  })

  return <div className={`flex space-x-1 ${className}`}>{triggers}</div>
}

TabsList.displayName = "TabsList"

const TabsTrigger = ({ children, value, isActive, onSelect, className = "" }) => {
  return (
    <button
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors
        ${isActive ? "bg-pink-100 text-pink-600" : "text-gray-600 hover:bg-gray-100"} ${className}`}
      onClick={onSelect}
    >
      {children}
    </button>
  )
}

TabsTrigger.displayName = "TabsTrigger"

const TabsContent = ({ children, value, activeTab, className = "" }) => {
  if (value !== activeTab) return null

  return <div className={`mt-2 ${className}`}>{children}</div>
}

TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
