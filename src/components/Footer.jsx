const Footer = () => {
    return (
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-pink-200 py-2 px-16 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xs text-pink-500">KVerse © {new Date().getFullYear()}</div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-40 bg-pink-100 rounded-full flex items-center px-2">
              <div className="w-4 h-4 rounded-full bg-pink-400 flex-shrink-0 mr-2"></div>
              {/* <div className="text-xs truncate">Now playing: Dynamite - BTS</div> */}
          <div className="text-xs text-pink-500">Made by Pookie</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  