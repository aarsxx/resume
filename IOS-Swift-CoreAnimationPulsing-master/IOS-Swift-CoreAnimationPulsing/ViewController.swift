//
//  ViewController.swift
//  IOS-Swift-CoreAnimationPulsing
//
//  Created by Andika on 2018-05-29.
//  Copyright © 2018 Andika. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    let oneInch = 25.4.mm
    print("One inch is \(oneInch) meters")
    // Prints "One inch is 0.0254 meters"
    let threeFeet = 3.ft
    print("Three feet is \(threeFeet) meters")
    // Prints "Three feet is 0.914399970739201 meters"
    
    @IBOutlet weak var buttonView: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
    
    buttonView.isUserInteractionEnabled = true
        // corner  radius untuk menggubah kotak menjadi lingkaran
        buttonView.layer.cornerRadius = 50
        
        let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(ViewController.addPulse))
      
        
        tapGestureRecognizer.numberOfTapsRequired = 2
        buttonView.addGestureRecognizer(tapGestureRecognizer)
        
    }

   
    
    @objc func addPulse() {
        let pulse =  Pulsing(numberOfPulses: 2, radius: 180, position: buttonView.center)
        pulse.animationDuration = 1.0
        self.view.layer.insertSublayer(pulse, below: buttonView.layer)
        
        // TODO: Add Button action after pulse
        print("Add Button action after pulse ")
    }
    
    
}

extension Double {
    var km: Double { return self * 1_000.0 }
    var m: Double { return self }
    var cm: Double { return self / 100.0 }
    var mm: Double { return self / 1_000.0 }
    var ft: Double { return self / 3.28084 }
}

