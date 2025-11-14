import { useState, useRef, useEffect } from "react";
import "./Poplist.css";

export default function Poplist({ trigger, options = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(value) {
    onSelect?.(value);
    setOpen(false);
  }

  return (
    <div className="poplist" ref={menuRef}>
      <div onClick={() => setOpen(!open)} className="poplist-trigger">
        {trigger}
      </div>

      {open && (
        <ul className="poplist-menu">
          {options.map((opt, index) => (
            <li
              key={index}
              className="poplist-item"
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
