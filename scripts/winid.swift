// Prints the CGWindowID of the Tilde window whose title matches argv[1].
import CoreGraphics
import Foundation

let target = CommandLine.arguments[1]
let opts: CGWindowListOption = [.optionOnScreenOnly, .excludeDesktopElements]
let list = CGWindowListCopyWindowInfo(opts, kCGNullWindowID) as! [[String: Any]]
for w in list {
    guard let owner = w[kCGWindowOwnerName as String] as? String, owner == "Tilde",
          let layer = w[kCGWindowLayer as String] as? Int, layer == 0,
          let id = w[kCGWindowNumber as String] as? Int,
          let name = w[kCGWindowName as String] as? String, name == target
    else { continue }
    print(id)
    exit(0)
}
FileHandle.standardError.write("window not found: \(target)\n".data(using: .utf8)!)
exit(1)
