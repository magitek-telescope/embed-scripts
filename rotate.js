setTimeout(() => {
  const r = document.createElement('style')
  r.innerHTML = `

.rotate-image {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
`
  document.querySelector('head').append(r)
}, 500)